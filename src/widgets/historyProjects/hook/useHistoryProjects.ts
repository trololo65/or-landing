export const useHistoryProjects = () => {
  const projects = [
    { 
      id: '1', 
      nameKey: 'historyProjects.project1.name', 
      tagKey: 'historyProjects.project1.tag',
      width: 55,
      translateY: -20,
    },
    { 
      id: '2', 
      nameKey: 'historyProjects.project2.name', 
      tagKey: 'historyProjects.project2.tag',
      width: 40,
      translateY: 0,
    },
    { 
      id: '3', 
      nameKey: 'historyProjects.project3.name', 
      tagKey: 'historyProjects.project3.tag',
      width: 40,
      translateY: 0,
    },
    { 
      id: '4', 
      nameKey: 'historyProjects.project4.name', 
      tagKey: 'historyProjects.project4.tag',
      width: 55,
      translateY: -20,
    },
    { 
        id: '6', 
        nameKey: 'historyProjects.project6.name', 
        tagKey: 'historyProjects.project6.tag',
        width: 55,
        translateY: -20,
    },
    { 
      id: '5', 
      nameKey: 'historyProjects.project5.name', 
      tagKey: 'historyProjects.project5.tag',
      width: 40,
      translateY: 0,
    },
  ]

  const handleProjectClick = (projectId: string) => {
    console.log('Project clicked:', projectId)
    // Здесь можно добавить навигацию или открытие модального окна
  }

  return {
    projects,
    handleProjectClick
  }
}

