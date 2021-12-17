import HttpApiService from '../api/HttpApiService';
import { IMortgageLoan } from '../ts/interfaces/mortgageloan.interface';

const API_BASE = `${process.env.basePath}`;

// const MORTGAGELOAN_ENDPOINT = `${API_BASE}/mortgageloan`;
const MORTGAGELOAN_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

export class MortgageLoanService extends HttpApiService {
  constructor() {
    super(`${API_BASE}`);
  }

  // #region MortgageLoan
  getMortgageLoanById = (id: number) => {
    return this.get(`${MORTGAGELOAN_ENDPOINT}/${id}`);
  };

  getAllMortgageLoan = () => {
    const response = this.get(`${MORTGAGELOAN_ENDPOINT}`);
    return response;
  };

  createMortgageLoan = (data: IMortgageLoan) => {
    return super.create(`${MORTGAGELOAN_ENDPOINT}`, data);
  };

  updateMortgageLoan = (data: IMortgageLoan) => {
    return super.update(`${MORTGAGELOAN_ENDPOINT}`, data);
  };
  // #endregion MortgageLoan
}

export const mortgageLoanApiService = new MortgageLoanService();
