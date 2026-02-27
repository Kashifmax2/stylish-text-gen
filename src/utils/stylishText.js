const mapWithOffset = (text, baseChars, styledChars) => {
  const map = new Map()
  for (let i = 0; i < baseChars.length; i += 1) {
    map.set(baseChars[i], styledChars[i] ?? baseChars[i])
    map.set(baseChars[i].toLowerCase(), styledChars[i] ?? baseChars[i].toLowerCase())
  }

  return text
    .split('')
    .map((ch) => map.get(ch) ?? ch)
    .join('')
}

const applyBetweenBrackets = (text, left, right) => {
  return `${left}${text}${right}`
}

const applyAroundEachChar = (text, symbol) => {
  if (!text) return ''
  return text
    .split('')
    .map((ch) => (ch === ' ' ? ' ' : `${ch}${symbol}`))
    .join('')
}

const bubbleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const bubbleStyled = [
  'Ⓐ',
  'Ⓑ',
  'Ⓒ',
  'Ⓓ',
  'Ⓔ',
  'Ⓕ',
  'Ⓖ',
  'Ⓗ',
  'Ⓘ',
  'Ⓙ',
  'Ⓚ',
  'Ⓛ',
  'Ⓜ',
  'Ⓝ',
  'Ⓞ',
  'Ⓟ',
  'Ⓠ',
  'Ⓡ',
  'Ⓢ',
  'Ⓣ',
  'Ⓤ',
  'Ⓥ',
  'Ⓦ',
  'Ⓧ',
  'Ⓨ',
  'Ⓩ',
]

const smallCapsChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const smallCapsStyled = [
  'ᴀ',
  'ʙ',
  'ᴄ',
  'ᴅ',
  'ᴇ',
  'ғ',
  'ɢ',
  'ʜ',
  'ɪ',
  'ᴊ',
  'ᴋ',
  'ʟ',
  'ᴍ',
  'ɴ',
  'ᴏ',
  'ᴘ',
  'ǫ',
  'ʀ',
  's',
  'ᴛ',
  'ᴜ',
  'ᴠ',
  'ᴡ',
  'x',
  'ʏ',
  'ᴢ',
]

const monospaceChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const monospaceStyled = [
  '𝙰',
  '𝙱',
  '𝙲',
  '𝙳',
  '𝙴',
  '𝙵',
  '𝙶',
  '𝙷',
  '𝙸',
  '𝙹',
  '𝙺',
  '𝙻',
  '𝙼',
  '𝙽',
  '𝙾',
  '𝙿',
  '𝚀',
  '𝚁',
  '𝚂',
  '𝚃',
  '𝚄',
  '𝚅',
  '𝚆',
  '𝚇',
  '𝚈',
  '𝚉',
]

const blackletterChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const blackletterStyled = [
  '𝕬',
  '𝕭',
  '𝕮',
  '𝕯',
  '𝕰',
  '𝕱',
  '𝕲',
  '𝕳',
  '𝕴',
  '𝕵',
  '𝕶',
  '𝕷',
  '𝕸',
  '𝕹',
  '𝕺',
  '𝕻',
  '𝕼',
  '𝕽',
  '𝕾',
  '𝕿',
  '𝖀',
  '𝖁',
  '𝖂',
  '𝖃',
  '𝖄',
  '𝖅',
]

const fancyGamingChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const fancyGamingStyled = [
  'ꀘ',
  'ꁳ',
  'ꉓ',
  'ꀸ',
  'ꏂ',
  'ꄘ',
  'ꁍ',
  'ꃅ',
  '꒐',
  '꒻',
  'ꀘ',
  '꒒',
  'ꂵ',
  'ꁹ',
  'ꉻ',
  'ꉣ',
  'ꉗ',
  'ꋪ',
  'ꌗ',
  '꓅',
  'ꀎ',
  'ꅏ',
  'ꅐ',
  'ꉧ',
  'ꐟ',
  'ꁴ',
]

export const generateStyledVariants = (rawText) => {
  const text = rawText.trim()
  if (!text) {
    return []
  }

  const base = text

  const style1Inner = mapWithOffset(base, smallCapsChars, smallCapsStyled)
  const style1 = applyBetweenBrackets(style1Inner, '꧁♛ ', ' ♛꧂')

  const style2 = mapWithOffset(base, monospaceChars, monospaceStyled)

  const style3Core = applyAroundEachChar(base.toUpperCase(), '҉')
  const style3 = applyBetweenBrackets(style3Core, '✞ ', ' ✞')

  const style4Core = mapWithOffset(base.toUpperCase(), blackletterChars, blackletterStyled)
  const style4 = applyBetweenBrackets(style4Core, '⚡ ', ' ⚡')

  const style5 = applyBetweenBrackets(base, '[', ']')

  const style6 = mapWithOffset(base, smallCapsChars, smallCapsStyled)

  const style7 = mapWithOffset(base.toUpperCase(), fancyGamingChars, fancyGamingStyled)

  const style8 = mapWithOffset(base.toUpperCase(), bubbleChars, bubbleStyled)

  const style9Inner = mapWithOffset(base, smallCapsChars, smallCapsStyled)
  const style9 = applyBetweenBrackets(style9Inner, '『', '』')

  const style10Core = mapWithOffset(base.toUpperCase(), blackletterChars, blackletterStyled)
  const style10 = applyBetweenBrackets(style10Core, '☠ ', ' ☠')

  const fixedStyles = [
    {
      id: 'style-1',
      label: 'Legendary Frame',
      badge: '꧁ VIP ꧂',
      value: style1,
    },
    {
      id: 'style-2',
      label: 'Monospace Pro',
      badge: '𝙿𝚄𝙱𝙶 / 𝙳𝙸𝚂𝙲𝙾𝚁𝙳',
      value: style2,
    },
    {
      id: 'style-3',
      label: 'Glitch Strike',
      badge: '҉ FX',
      value: style3,
    },
    {
      id: 'style-4',
      label: 'Dark Knight',
      badge: '𝕭𝖑𝖆𝖈𝖐𝖑𝖊𝖙𝖙𝖊𝖗',
      value: style4,
    },
    {
      id: 'style-5',
      label: 'Bracket Tag',
      badge: '[ CLAN TAG ]',
      value: style5,
    },
    {
      id: 'style-6',
      label: 'Mini Caps',
      badge: 'ᴠɪᴘ',
      value: style6,
    },
    {
      id: 'style-7',
      label: 'Elite Gamer',
      badge: 'ꀘꋫꌚꁝ꒐ꄘꂵꋫꉔ',
      value: style7,
    },
    {
      id: 'style-8',
      label: 'Bubble Badge',
      badge: 'Ⓟⓤⓑⓖ',
      value: style8,
    },
    {
      id: 'style-9',
      label: 'Framed Tag',
      badge: '『 PREMIUM 』',
      value: style9,
    },
    {
      id: 'style-10',
      label: 'Skull Squad',
      badge: '☠ RUSH',
      value: style10,
    },
  ]

  const decorationPairs = [
    ['꧁', '꧂'],
    ['彡', '彡'],
    ['『', '』'],
    ['༒', '༒'],
    ['★', '★'],
    ['♛', '♛'],
    ['⚔', '⚔'],
    ['⟦', '⟧'],
    ['〈', '〉'],
  ]

  const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)]

  const transformers = [
    (t) => mapWithOffset(t, smallCapsChars, smallCapsStyled),
    (t) => mapWithOffset(t.toUpperCase(), monospaceChars, monospaceStyled),
    (t) => mapWithOffset(t.toUpperCase(), blackletterChars, blackletterStyled),
    (t) => mapWithOffset(t.toUpperCase(), bubbleChars, bubbleStyled),
    (t) => applyAroundEachChar(t.toUpperCase(), '҉'),
  ]

  const aiStyles = []
  for (let i = 0; i < 6; i += 1) {
    const [left, right] = randomFrom(decorationPairs)
    const transform = randomFrom(transformers)
    const core = transform(base)
    const value = applyBetweenBrackets(core, `${left} `, ` ${right}`)

    aiStyles.push({
      id: `style-ai-${i + 1}`,
      label: `AI Mix ${i + 1}`,
      badge: 'AUTO RANDOM',
      value,
    })
  }

  return [...fixedStyles, ...aiStyles]
}

