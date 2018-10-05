/**
 * App Theme - Colors
 */
const app = {
  background: 'rgba(237,235,241,1.0)',
  pendingColor: '#ff600c',
  approvedColor: '#2986CF',
  completedColor: '#21B559',
  rejectedColor: '#E43F3F',
  orange: 'rgba(247,141,56,1.0)',
  cardBackground: '#FFFFFF',
  listItemBackground: '#FFFFFF',
  imageBackground: '#d6d6d6',
  imageIconBackGround: '#A0ABBE',
  white: 'rgba(255,255,255,1)',
  black: 'rgba(0,0,0,1)',
  transparent: 'rgba(0,0,0,0)',
  green: '#6ACB40',
  pink: '#FF5656',
  blue: '#2986CF',
  cerulean: '#009BD5',
  red: '#FF203B',
  lightgray: '#efefef',
  gray: '#999',
  darkgray: '#333',
  purple: '#DA439F',
  blueApp: '#2986CF',
  greenApp: '#09D42C',
  grayApp: '#8C8C8C',
  lineColor: '#E4E4E4',
  shadowColorGray: '#E8E8E8',
  blueBackground: '#42A5F5',
  blueFacebook: '#366AA7',
  blueTwitter: '#55ACEE',
  redGoogle: '#D12122',
  divider: '#d3dfe4',
  iconGray: 'rgba(180,180,180,1)',
  lineGray: 'rgba(237,237,237,1)',
  statusbar: 'rgba(116, 189, 229,1)',
  sectionText: '#788793',
  addMoreButton: 'rgba(0, 0, 0, 0.2)',
  grey : '#f2f2f2',
};

const brand = {
  brand: {
    primary: '#FFF',
    secondary: '#17233D',
  },
};

const text = {
  textNavbar: '#fff',
  textPrimary: '#000000',
  textSecondary: 'rgba(0, 0, 0, 0.3)',
  textMinor: '#CCCCCC',
  textRed: '#F42F47',
  textBlue: '#00aedd',
  headingPrimary: brand.brand.primary,
  headingSecondary: brand.brand.primary,
  textTitle: '#68737f',
  textContent: 'rgba(52, 64, 82, 1)',
  textSubContent: 'rgba(52, 64, 82, 0.5)',
  regular: '#344052',
  placeHolder: 'rgba(0,0,0,0.3)'
};

const borders = {
  border: '#DFDFDF',
};

const ticked = {
  ticked: '#39CE13',
};

const tabbar = {
  tabbar: {
    background: { active: '#f9f9f9', inactive: '#f9f9f9' },
  },
};

const navbar = {
  navbar: {
    background: 'white'
  }
}

const searchbar = {
  searchbar: {
    background: '#343f51',
    textInput: '#9FADB4',
    backgroundText: '#434F61',
  }
}

const dialog = {
  dialogBody: 'rgba(238, 241, 242, 1)',
  dialogDivider: 'rgba(205, 217, 223, 1)',
}

export default {
  ...app,
  ...brand,
  ...text,
  ...borders,
  ...tabbar,
  ...navbar,
  ...dialog,
  ...searchbar,
  ...ticked,
};
