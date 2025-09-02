import { ref } from 'vue'

// Estado global do idioma
const locale = ref('pt') // pt = português, en = inglês

export function useLocale() {
  const toggleLocale = () => {
    locale.value = locale.value === 'pt' ? 'en' : 'pt'
  }

  return { locale, toggleLocale }
}