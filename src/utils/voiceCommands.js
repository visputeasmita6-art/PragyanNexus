export const voiceCommands = (command) => {
  const map = {
    'go to dashboard': '/dashboard',
    'show dashboard': '/dashboard',
    'open dashboard': '/dashboard',
    'show objectives': '/',
    'go home': '/',
    'home': '/',
    'open projects': '/',
    'read blogs': '/',
    'contact us': '/about',
    'go to alerts': '/alerts',
    'show alerts': '/alerts',
    'feedback': '/feedback',
    'open feedback': '/feedback',
    'refresh data': () => window.location.reload(),
    'refresh': () => window.location.reload()
  }
  for (const [key, value] of Object.entries(map)) {
    if (command.includes(key)) return value
  }
  return null
}