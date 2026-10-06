import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Alvero Tecnologia — Sistemas sob medida, IA e automação';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const icon = await readFile(join(process.cwd(), 'public/icon.png'));
  const iconSrc = `data:image/png;base64,${icon.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0B1320 0%, #0D1B3D 60%, #123170 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '56px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={112} height={112} style={{ borderRadius: '24px' }} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: '0.16em' }}>ALVERO</div>
            <div style={{ fontSize: 22, letterSpacing: '0.32em', color: '#149BFF' }}>TECNOLOGIA</div>
          </div>
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.2, maxWidth: '980px' }}>
          Tecnologia que se adapta ao seu negócio.
        </div>
        <div style={{ fontSize: 30, color: 'rgba(255,255,255,0.7)', marginTop: '24px' }}>
          Sistemas sob medida · Agentes de IA · Automação · Dashboards
        </div>
      </div>
    ),
    size,
  );
}
