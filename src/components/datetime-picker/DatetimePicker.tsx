import * as React from 'react';
import './DatetimePicker.css';

export interface IDatetimePickerProps {
}

export default function DatetimePicker(props: IDatetimePickerProps) {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());
    const [selectedTime, setSelectedTime] = React.useState('00:00:00');
    const [calendarShow, setCalendarShow] = React.useState(true);

    const onChangeDate = (event : any) => {
        if (event.target.innerHtml !== '') {
            let nDate = new Date(selectedDate);
            nDate.setDate(event.target.textContent);
            setSelectedDate(nDate);
        }
    };

    const onChangeMonth = (event : any) => {
        let nDate = new Date(selectedDate);
        nDate.setMonth(event.target.value);
        setSelectedDate(nDate);
        setSelectedMonth(nDate.getMonth());
    };

    const onChangeYear = (event : any) => {
        let nDate = new Date(selectedDate);
        nDate.setFullYear(event.target.value);
        setSelectedDate(nDate);
        setSelectedYear(nDate.getFullYear());
    };

    const onChangeTime = (event : any) => {
        if (/^(?:(?:[0-2])|(?:2[0-3])|(?:[0-1][0-9])):(?:(?:[0-5])|(?:[0-5][0-9])):(?:(?:[0-5])|(?:[0-5][0-9]))$/.test(event.target.value.trim())) {
            setSelectedTime(event.target.value.trim());
        }
    };

    const displayCalendar = () => {
        //const convertDay : Array<string> = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const convertMonth : Array<string> = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        const nbDaysPerMonth : Array<Number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const date = selectedDate.getDate();

        const tbDays : any = [];
        const tbWeeks : any = [];

        const startDayOfMonth = new Date(selectedDate);
        startDayOfMonth.setDate(1);
        let emptyCelSize : Number;

        if (startDayOfMonth.getDay() === 0) {
            emptyCelSize = 6; 
        } else {
            emptyCelSize = startDayOfMonth.getDay() - 1;
        }

        if (emptyCelSize) {
            for (let i = 0; i < emptyCelSize; i += 1) {
                tbDays.push((<td key={'id_tde_' + i} className='empty'></td>));
            }
        }

        for (let i = 0; i < nbDaysPerMonth[selectedMonth]; i += 1) {
            tbDays.push((<td key={'id_td_' + i}  id={i+1 === date ? 'selected-day' : undefined}>{i + 1}</td>));
        }

        for (let i = 0; i < tbDays.length / 7; i += 1) {
            tbWeeks.push((<tr key={'id_tr_' + i} >{tbDays.slice(i * 7, i * 7 + 7)}</tr>));
        }


        return (
            <div className='container'>
                <div className="row px-3 pt-3">
                    <select className='form-control form-control-sm col' name="month" id="" value={selectedMonth}
                     onChange={onChangeMonth}
                    >
                        {convertMonth.map((element, index) => {
                            return (<option key={'id_opti_' + index} value={index}>{element}</option>)
                        })}
                    </select>
                    <input className='form-control form-control-sm col' type="number" value={selectedYear} onChange={onChangeYear}/>
                </div>
                <div className="row px-3">
                <table className="col my-3">
                    <thead>
                        <tr>
                            <th>L</th>
                            <th>M</th>
                            <th>M</th>
                            <th>J</th>
                            <th>V</th>
                            <th>S</th>
                            <th>D</th>
                        </tr>
                    </thead>
                    <tbody onClick={onChangeDate}>
                        {tbWeeks.map((element : any) => {
                            return element
                        })}
                    </tbody>
                </table>
                </div>
                <div className="row px-3">
                <input 
                    className='form-control form-control-sm'
                    type="text"
                    value={selectedTime}
                    onChange={onChangeTime}
                />
                </div>
                <div className="row px-3">
                <input 
                    className='btn btn-primary col my-3'
                    type="button"
                    value='set'
                />
                </div>
            </div>
        )
    };
    return (
        <React.Fragment>
            {calendarShow && <div id='calendar'>
                {displayCalendar()}
            </div>}
            <div className="input-group">
                <input 
                    type='text' 
                    value={selectedDate.toLocaleDateString() + ' ' + selectedTime}
                    className='form-control form-control-lg' 
                    onChange={(event :any)=> {console.log(event.target.value)}}          
                />
                <div className="input-group-append">
                <span onClick={() => setCalendarShow(true)} className="input-group-text">D</span>
                </div>
            </div>
        </React.Fragment>
  );
}
