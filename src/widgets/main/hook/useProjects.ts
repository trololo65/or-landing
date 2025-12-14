export const useProjects = () => {
  const handleProjectClick = (projectId: string) => {
    console.log('Project clicked:', projectId)
    // Здесь можно добавить навигацию или открытие модального окна
  }

  return {
    handleProjectClick
  }
}

