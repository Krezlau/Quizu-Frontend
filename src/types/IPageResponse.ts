interface IPageResponse<T> {
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  queryResult: T[];
}

export default IPageResponse;
