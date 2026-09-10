import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name = '', email = '', whatsapp = '', company = '', solution = '', bottleneck = '' } = body || {};

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === '' || apiKey.includes('YOUR_')) {
      console.log('--- [MOCK LOG] LEAD DIAGNÓSTICO RECEBIDO ---');
      console.log('Nome:', name);
      console.log('E-mail:', email);
      console.log('WhatsApp:', whatsapp);
      console.log('Empresa:', company);
      console.log('Solução:', solution);
      console.log('Gargalo:', bottleneck);
      console.log('---------------------------------------------');

      await new Promise((resolve) => setTimeout(resolve, 500));
      return NextResponse.json({ success: true, mock: true });
    }

    const safeBottleneck = String(bottleneck).replace(/\n/g, '<br/>');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey.trim()}`,
      },
      body: JSON.stringify({
        from: 'Alvero Leads <onboarding@resend.dev>',
        to: 'alverotecnologia@gmail.com',
        subject: `Novo Lead de Diagnóstico: ${company || name || 'Novo Contato'}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #172033; max-width: 600px;">
            <h1 style="color: #2563EB; border-bottom: 2px solid #E6E8EB; padding-bottom: 10px;">Novo Lead de Diagnóstico</h1>
            <p style="margin: 15px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 15px 0;"><strong>E-mail:</strong> ${email}</p>
            <p style="margin: 15px 0;"><strong>WhatsApp:</strong> ${whatsapp}</p>
            <p style="margin: 15px 0;"><strong>Empresa:</strong> ${company}</p>
            <p style="margin: 15px 0;"><strong>Solução de Interesse:</strong> ${solution}</p>
            <p style="margin: 15px 0; background-color: #F5F7FA; padding: 15px; border-radius: 10px; border: 1px solid #E6E8EB;">
              <strong>Gargalo Operacional:</strong><br/>
              ${safeBottleneck}
            </p>
            <span style="font-size: 11px; color: #667085;">Enviado pelo formulário institucional da Alvero Tecnologia.</span>
          </div>
        `,
      }),
    });

    const resData = await response.json().catch(() => null);

    if (!response.ok) {
      console.error('Erro de envio do Resend:', resData);
      return NextResponse.json({ 
        error: 'Falha ao enviar e-mail via Resend', 
        details: resData 
      }, { status: response.status || 500 });
    }

    return NextResponse.json({ success: true, data: resData });
  } catch (error: any) {
    console.error('Erro interno na rota /api/diagnostico:', error);
    return NextResponse.json({ error: 'Erro interno do servidor', message: error?.message }, { status: 500 });
  }
}
