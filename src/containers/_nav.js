export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Componentes']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Lenguajes',
        to: '/lenguajes',
        icon: 'cil-cursor'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Programadores',
        to: '/programadores',
        icon: 'cil-people'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Programadores de lenguajes',
        to: '/pl',
        icon: 'cil-puzzle'
      },
      
    ]
  }
]