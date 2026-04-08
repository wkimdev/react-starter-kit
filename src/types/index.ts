/** Common API response wrapper */
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

/** Paginated response */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** Base entity with audit fields */
export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}
