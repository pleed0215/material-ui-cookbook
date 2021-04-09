import { TextField, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { ChangeEventHandler, useState } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    textField: { margin: theme.spacing(1) }
}))

export const UsingDatePickers = () => {
    const styles = useStyles();
    const [date, setDate] = useState('');

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setDate(e.target.value);

    const dateFormatted = date ? new Date(`${date}T00:00:00`).toLocaleDateString() : null;

    return (
        <>
            <TextField value={date} onChange={onChange} label="My Date" type="date" className={styles.textField} InputLabelProps={{
                shrink: true
            }} />
            <TextField value={dateFormatted} label="Updated Date Value" className={styles.textField} InputLabelProps={{ shrink: true }} InputProps={{ readOnly: true }} />
        </>
    )
}
