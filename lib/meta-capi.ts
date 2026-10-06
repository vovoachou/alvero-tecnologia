import { COMPANY } from './company';

// Conversions API do Meta: envia o Lead pelo servidor, com o mesmo eventID do Pixel
// para que o Meta conte o evento uma única vez.
const GRAPH_API_VERSION = process.env.META_GRAPH_API_VERSION?.trim() || 'v26.0';

// Dados enviados pelo navegador junto com o formulário (somente com consentimento).
export interface MetaClientData {
  eventId: string;
  eventSourceUrl?: string;
  fbp?: string;
  fbc?: string;
}

const EVENT_ID = /^[\w-]{8,100}$/;
const FBP = /^fb\.\d\.\d+\.\d+$/;
const FBC = /^fb\.\d\.\d+\.[\w-]{1,500}$/;

// Valida o que veio do navegador; descarta qualquer campo fora do formato esperado.
export function parseMetaClientData(raw: unknown): MetaClientData | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  if (typeof r.eventId !== 'string' || !EVENT_ID.test(r.eventId)) return null;
  const str = (v: unknown, re: RegExp) => (typeof v === 'string' && re.test(v) ? v : undefined);
  const url = typeof r.eventSourceUrl === 'string' && r.eventSourceUrl.startsWith(COMPANY.siteUrl) ? r.eventSourceUrl : undefined;
  return { eventId: r.eventId, eventSourceUrl: url, fbp: str(r.fbp, FBP), fbc: str(r.fbc, FBC) };
}

export async function sendMetaLead(
  client: MetaClientData,
  request: { ip?: string; userAgent?: string; contentName?: string },
) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN?.trim();
  if (!pixelId || !accessToken) return;
  const testEventCode = process.env.META_CAPI_TEST_CODE?.trim();

  const userData: Record<string, string> = {};
  if (request.ip) userData.client_ip_address = request.ip;
  if (request.userAgent) userData.client_user_agent = request.userAgent;
  if (client.fbp) userData.fbp = client.fbp;
  if (client.fbc) userData.fbc = client.fbc;

  const body = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: client.eventId,
        action_source: 'website',
        event_source_url: client.eventSourceUrl || `${COMPANY.siteUrl}/diagnostico`,
        user_data: userData,
        ...(request.contentName && { custom_data: { content_name: request.contentName } }),
      },
    ],
    ...(testEventCode && { test_event_code: testEventCode }),
    access_token: accessToken,
  };

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      console.error('[Meta CAPI] Falha ao enviar Lead:', res.status, data?.error?.message, data?.error?.fbtrace_id);
      return;
    }
    console.log('[Meta CAPI] Lead enviado:', {
      eventId: client.eventId,
      eventsReceived: data?.events_received,
      test: Boolean(testEventCode),
      fbtraceId: data?.fbtrace_id,
    });
  } catch (error) {
    console.error('[Meta CAPI] Erro ao enviar Lead:', error instanceof Error ? error.message : error);
  }
}
