const getEnCount = (text: string) => {
  const tmp = text.replace(/[^\w-]/g, ' ')
  const words = tmp.split(/\s+/).filter((w) => {
    return ['', '-', '_'].indexOf(w.trim()) === -1
  })

  return words.length
}

const getZhCount = (text: string) => {
  const words = text.match(/\p{sc=Han}/gu)
  return words?.length ?? 0
}

export function getWordCount(str: string) {
  const en = getEnCount(str)
  const zh = getZhCount(str)

  console.log(en, zh)

  return en + zh
}
