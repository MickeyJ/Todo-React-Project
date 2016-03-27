
export const headerStyle = {
  display: 'inline'
};

export const footerStyle = {
  padding: '10px 0',
  borderTop: '1px solid #ccc'
};

export function isDoneStyle(bool){
  return bool
    ? {background: 'limegreen', outline: 'none'}
    : {background: 'white', outline: 'none', border: '1px solid #ccc'}
}
