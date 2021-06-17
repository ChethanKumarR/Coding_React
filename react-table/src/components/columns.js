import {format} from 'date-fns';
import { ColumnFilter } from './ColumnFilter';
export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Footer:'Id',
        // Filter: ColumnFilter,
        disableFilters:true,
        sticky:'left'
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        sticky:'left'
        // Footer: 'first_name',
        // Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Footer: 'last_name',
        sticky:'left'
        // Filter: ColumnFilter
    },
    {
        Header: 'Date of Birth',
        accessor: 'date_of_birth',
        Footer: 'date_of_birth',
        Cell:({value}) => {return format(new Date(value), 'dd/MM/yyyy')},
        // Filter: ColumnFilter
    },
    {
        Header: 'Country',
        accessor: 'country',
        Footer: 'country',
        // Filter: ColumnFilter
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        Footer: 'phone',
        // Filter: ColumnFilter
    },
    {
        Header: 'Email',
        accessor: 'email',
        Footer: 'email',
        // Filter: ColumnFilter
    },
    {
        Header: 'Age',
        accessor: 'age',
        Footer: 'age',
        // Filter: ColumnFilter
    }

]

export const GROUPED_COLUMNS = [
    {
        Header:'Id',
        accessor:'id',
        Footer:'Id'
    },
    {
        Header:'Name',
        Footer:'Name',
        columns:[
            {
                Header: 'First Name',
                accessor: 'first_name',
                Footer: 'first_name'
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
                Footer: 'last_name'
            },
        ]
    },

    {
       Header:'Info',
       Footer:'Info',
       columns:[
        {
            Header: 'Date of Birth',
            accessor: 'date_of_birth',
            Footer: 'date_of_birth'
        },
        {
            Header: 'Country',
            accessor: 'country',
            Footer: 'country'
        },
        {
            Header: 'Phone',
            accessor: 'phone',
            Footer: 'phone'
        }
       ]
    }

]