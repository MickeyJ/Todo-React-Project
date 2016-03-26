
export const headerStyle = {
  borderBottom: '1px solid #ccc'
};

export const footerStyle = {
  padding: '10px 0',
  borderTop: '1px solid #ccc'
};

export function isDoneStyle(bool){
  return bool
    ? {background: 'limegreen'}
    : {background: 'red'}
}