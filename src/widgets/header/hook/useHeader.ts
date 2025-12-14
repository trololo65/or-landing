import { ref, onMounted, onUnmounted } from 'vue'

export const useHeader = () => {
  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
  }
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    // Блокируем скролл body при открытом меню
    if (isMobileMenuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
  
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.body.style.overflow = ''
  })
  
  return {
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  }
}

