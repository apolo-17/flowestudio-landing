const GA_ID = 'G-VWC92RCV64'

export function trackWhatsAppClick(label: string = 'cta_whatsapp') {
  window.gtag?.('event', 'click_whatsapp', {
    event_category: 'engagement',
    event_label: label,
    send_to: GA_ID,
    value: 1,
  })
}
