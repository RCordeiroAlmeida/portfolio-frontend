import { ref, watch } from 'vue'

const isDark = ref(false)

// Sincroniza a classe 'dark' no html
watch(isDark, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

// Tenta detectar preferência do sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  isDark.value = true
}

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
}
