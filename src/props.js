/**
 * props declaration for default, item and slot component
 */

export const VirtualProps = {
  dataKey: {
    type: String,
    required: true
  },
  dataSources: {
    type: Array,
    required: true
  },
  dataComponent: {
    type: [Object, Function],
    required: true
  },

  keeps: {
    type: Number,
    default: 30
  },
  extraProps: {
    type: Object
  },
  estimateSize: {
    type: Number,
    default: 50
  },

  rootTag: {
    type: String,
    default: 'div'
  },
  wrapTag: {
    type: String,
    default: 'div'
  },
  wrapClass: {
    type: String,
    default: ''
  },
  direction: {
    type: String,
    default: 'vertical' // the other value is horizontal
  },
  topThreshold: {
    type: Number,
    default: 0
  },
  bottomThreshold: {
    type: Number,
    default: 0
  },
  start: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 0
  },
  itemTag: {
    type: String,
    default: 'div'
  },
  itemClass: {
    type: String,
    default: ''
  },
  itemClassAdd: {
    type: Function
  },
  headerTag: {
    type: String,
    default: 'div'
  },
  headerClass: {
    type: String,
    default: ''
  },
  footerTag: {
    type: String,
    default: 'div'
  },
  footerClass: {
    type: String,
    default: ''
  }
}

export const ItemProps = {
  index: {
    type: Number
  },
  event: {
    type: String
  },
  tag: {
    type: String
  },
  horizontal: {
    type: Boolean
  },
  source: {
    type: Object
  },
  component: {
    type: [Object, Function]
  },
  uniqueKey: {
    type: String
  },
  extraProps: {
    type: Object
  }
}

export const SlotProps = {
  event: {
    type: String
  },
  uniqueKey: {
    type: String
  },
  tag: {
    type: String
  },
  horizontal: {
    type: Boolean
  }
}
