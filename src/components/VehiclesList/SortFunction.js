const sort = (a, b, order, dataField) => {
    if (order === 'asc') {
      return b - a;
    }
    return a - b; // desc
  }

  export default sort;