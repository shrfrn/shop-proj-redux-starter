const { useState, useEffect, useRef } = React
import { eventBusService } from '../services/event-bus.service.js'

export function UserMsg() {
	const [msg, setMsg] = useState(null)
	const timeoutIdRef = useRef()

	useEffect(() => {
		const unsubscribe = eventBusService.on('show-user-msg', msg => {
			setMsg(msg)
			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current)
				timeoutIdRef.current = null
			}
			timeoutIdRef.current = setTimeout(closeMsg, 3000)
		})
		return unsubscribe
	}, [])

	function closeMsg() {
		setMsg(null)
	}

	if (!msg) return <span></span>
	return (
		<section className={`user-msg ${msg.type}`}>
			{msg.txt}
			<button onClick={closeMsg}>x</button>
		</section>
	)
}
