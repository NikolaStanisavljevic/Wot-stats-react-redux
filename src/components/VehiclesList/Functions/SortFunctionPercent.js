const sortPercent = (a, b, order, dataField) => {
    const a1 = a.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\\]/gi, '');
    const b1 = b.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\\]/gi, '');
    const numA = parseFloat(a1).toFixed(2);
    const numB = parseFloat(b1).toFixed(2);
       
    if (order === 'asc') {
      return numB - numA;
    }
    return numA - numB; // desc
  }

export default sortPercent;

