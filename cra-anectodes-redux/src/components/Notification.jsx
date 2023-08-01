import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function Notification() {

  const message = useSelector(state => state.notifications.message)
  const type = useSelector(state => state.notifications.type)

  if (message === null) {
    return null
  }

  return (
    <div id="error" className={type === 'add' ? 'bg-green-700 text-lg p-5 rounded my-2 text-slate-200' : 'bg-red-600 text-lg p-5 rounded my-2 text-slate-200'}>
      {message}
    </div>
  )
}
