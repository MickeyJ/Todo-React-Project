
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

export const clockStyle = {
  margin: '0 auto',
  width: 170,
  height: 40,
  textAlign: 'center',
  border: '2px solid gray',
  borderRadius: 10
};