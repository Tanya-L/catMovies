import {parseISO} from 'date-fns'

export default function ShowDate({dateString}: { dateString: string }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>
        {date.toDateString()}
    </time>
}
