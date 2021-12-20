export default {
    tableAttributes: {
        data: {
            label: '显示的数据',
            value: [],
            type: Array
        },
        height: {
            label: 'Table 的高度',
            value: '',
            type: [String, Number]
        },
        maxHeight: {
            label: 'Table 的最大高度',
            value: '',
            tip: '默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式',
            type: [String, Number]
        },
        stripe: {
            laebl: '是否为斑马纹 table',
            value: false,
            type: Boolean
        },
        border: {
            label: '是否带有纵向边框',
            value: false,
            type: Boolean
        },
        size: {
            label: 'Table 的尺寸',
            value: '',
            type: String
        },
        fit: {
            label: '列的宽度是否自撑开',
            value: true,
            type: Boolean
        },
        showHeader: {
            label: '',
            value: true,
            type: Boolean
        },
        highlightCurrentRow: {
            label: '是否要高亮当前行',
            value: false,
            type: Boolean
        },
        currentRowKey: {
            label: '当前行的 key，只写属性',
            value: '',
            type: [String,Number]
        }
    },
    tableEvents: {

    },
    tableColumnAttributes: {

    },
}
