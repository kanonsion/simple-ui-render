import type from '../type'
import tableConfig from './table'
export default [
    {
        type: type.table,
        label: '表格',
        config: tableConfig,
    },
    {
        type: type.dialog,
        label: '弹框'
    },
    {
        type: type.form,
        label: '表单'
    }
]
