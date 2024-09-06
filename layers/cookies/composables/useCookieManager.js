// THE HASH USED IN URL TO OPEN THE MANAGER
const HASH = 'cookies'

const groups = [
  {
    id: 'necessary',
    defaultValue: true,
    editable: false,
  },
  {
    id: 'functional',
    defaultValue: true,
    editable: false,
  },
  {
    id: 'tracking',
    defaultValue: false,
    editable: true,
  },
]

export default function () {
  const router = useRouter()
  const cookieContent = useCookie('cookies-manager', {
    maxAge: 3600 * 24 * 90,
  })
  const actions = useState('cmActions', () => [])
  // const cookiesList = ref([])

  // AN EDITABLE OBJECT OF ACTIVE / UNACTIVE GROUP OF COOKIES
  // USED IN INPUTS AS V-MODEL
  const cookies = useState('cmCookies', () => ({}))
  // A READ-ONLY OBJECT OF ACTIVE / UNACTIVE GROUP OF COOKIES
  // UPDATED ON SAVE
  const preferences = useState('cmPreferences', () => ({}))
  // WHETHER THE COOKIE MANAGER SHOULD BE DISPLAYED OR NOT
  const showManager = useState('cmShowManager', () => false)
  // WHETHER THE USER MADE A CHOICE OR NOT
  const choiceWasMade = useState('cmChoiceWasMade', () => false)
  // WHETHER THE USER MADE A CHOICE OR NOT
  const ready = useState('cmReady', () => false)

  router.beforeEach((to, _, next) => {
    showManager.value = to.hash.includes(HASH)
    next()
  })

  const init = (actionsArg) => {
    // LOAD ACTIONS
    actions.value = actionsArg
    // INITIATE COOKIES OBJECT WITH DEFAULT VALUES
    groups.forEach((group) => {
      cookies.value[group.id] = group.default
    })
    // GET USER PREFERENCES
    getUserPreferences()

    // TRIGGER INITIAL CALLBACKS
    handleInitialActions()

    // READY TO GO
    ready.value = true
    const route = useRoute()
    showManager.value = route.hash.includes(HASH)
  }

  const getUserPreferences = () => {
    // LOAD USER PREFERENCES from COOKIE
    if (cookieContent.value) {
      choiceWasMade.value = true
    } else {
      choiceWasMade.value = false
    }
    // PARSE USER PREFERENCES TO OBJECT OR USE DEFAULT VALUE IF NOT SET
    groups.forEach(({ id, defaultValue }) => {
      const value = cookieContent.value?.[id] || defaultValue
      preferences.value[id] = value
    })
    // SET INITIAL COOKIES VALUE
    cookies.value = { ...preferences.value }
  }

  const handleInitialActions = () => {
    if (!actions.value) return
    groups.forEach((group) => {
      // IF GROUP IS EDITABLE
      if (!group.editable) return
      const groupActions = actions.value[group.id]
      if (!groupActions) return
      // TRIGGER ACTIVATION IF TRUE
      if (cookies.value[group.id]) {
        groupActions.activate && groupActions.activate()
      }
      // TRIGGER DEACTIVATION AND KILL COOKIES IF FALSE
      else {
        groupActions.deactivate && groupActions.deactivate()
        // killGroupCookies(group.id)
      }
    })
  }

  const handleUpdateActions = () => {
    if (!actions.value) return
    groups.forEach((group) => {
      // IF GROUP IS EDITABLE
      if (!group.editable) return
      const groupActions = actions.value[group.id]
      if (!groupActions) return
      const newValue = cookies.value[group.id]
      const savedValue = preferences.value[group.id]
      // IF GROUP CHANGED
      console.log({ newValue, savedValue })
      if (newValue !== savedValue) {
        // TO TRUE -> ACTIVATE
        if (newValue) {
          groupActions.activate && groupActions.activate()
        }
        // TO FALSE -> DEACTIVATE, KILL COOKIES, RELOAD
        else {
          groupActions.deactivate && groupActions.deactivate()
          // killGroupCookies(group.id)
          setTimeout(() => window.location.reload(), 200)
        }
      }
    })
  }

  // const killGroupCookies = (group) => {
  //   // if (!cookiesList) return console.warn('cookiesList not loaded yet')
  //   // const toBeKilled = this.cookiesList
  //   //   .filter((item) => item.type === group)
  //   //   .map((item) => item.name)
  //   // Object.keys(getAllCookies()).forEach((cookieName) => {
  //   //   if (toBeKilled.some((item) => cookieName.includes(item))) {
  //   //     deleteCookie(cookieName)
  //   //     console.log('Killed this cookie (user preferences):', cookieName)
  //   //   }
  //   // })
  // }

  // ACCEPT ALL COOKIES AND SAVE
  const acceptAllCookies = () => {
    groups.forEach(({ id }) => {
      cookies.value[id] = true
    })
    saveUserPreferences()
  }

  // REFUSE ALL COOKIES AND SAVE
  const refuseAllCookies = () => {
    groups.forEach(({ id }) => {
      cookies.value[id] = false
    })
    saveUserPreferences()
  }

  // SAVE USER PREFENCES IN COOKIE
  const saveUserPreferences = () => {
    cookieContent.value = cookies.value

    // HANDLE COOKIES ACTIVATION / DEACTIVATION
    handleUpdateActions()

    // RESET VARIABLES BY RETREIVING FRESHLY UPDATED DATA
    getUserPreferences()

    // HIDE COOKIEBAR
    choiceWasMade.value = true
  }

  const openCookiesRoute = computed(() => {
    const route = useRoute()
    return {
      ...route,
      hash: `#${HASH}`,
    }
  })

  const closeCookiesRoute = computed(() => {
    const route = useRoute()
    return {
      ...route,
      hash: '',
    }
  })

  return {
    init,
    acceptAllCookies,
    refuseAllCookies,
    saveUserPreferences,
    cookies,
    openCookiesRoute,
    closeCookiesRoute,
    choiceWasMade,
    ready,
    showManager,
    groups,
  }
}
