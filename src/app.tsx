import '@unocss/reset/tailwind.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense, children } from 'solid-js'
import { Motion, Presence } from 'solid-motionone'
import Nav from '~/components/Nav'

export default function App() {
  const NewFileRoutes = () => FileRoutes().map((route) => {
    return {
      ...route,
      component: (props: any) => {
        return (

          <Motion
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            <route.component {...props} />
          </Motion>

        )
      },
    }
  })
  return (
    <Router
      root={(props) => {
        return (
          <>
            <Nav />
            <Suspense><Presence exitBeforeEnter>{props.children}</Presence></Suspense>
          </>
        )
      }}
    >
      <NewFileRoutes />
    </Router>
  )
}
