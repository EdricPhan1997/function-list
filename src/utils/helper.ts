import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

/*
  Kieu ErrorFromObject danh cho truong hop bao quat
*/

interface ErrorFromObject {
  [key: string | number]: string | ErrorFromObject | ErrorFromObject[]
}

interface EntityError {
  status: 422
  data: {
    error: ErrorFromObject
  }
}

/**
 * Phương pháp "type predicate" dùng để thu hẹp kiểu của một biến
 * ✅ Đầu tiên chúng ta sẽ khai báo một function check kiểm tra cấu trúc về mặc logic javascript
 * ✅ Tiếp theo chúng ta thêm `parameterName is Type` làm kiểu return của function thay vì boolean
 * ✅ Khi dùng function kiểu tra kiểu này, ngoài việc kiểm tra về mặc logic cấu trúc, nó còn chuyển kiểu
 *
 * So sánh với phương pháp ép kiểu "Type Assertions" thì ép kiểu chúng giúp chúng ta đúng về mặc Type, chưa chắc về logic
 *
 */

/**
 * Thu hẹp một error có kiểu không xác định về `FetchBaseQueryError`
 */

// Khi function chay xong function se co kieu FetchBaseQueryError
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error !== null && 'status' in error
}

/**
 * Thu hẹp một error có kiểu không xác định về một object với thuộc tính message: string (SerializedError)
 */

// Khi function chay xong function se co kieu message: string
export function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string'
}

export function isEntityError(error: unknown): error is EntityError {
  return (
    isFetchBaseQueryError(error) &&
    error.status === 422 &&
    typeof error.data === 'object' &&
    error.data !== null &&
    !(error.data instanceof Array)
  )
}

export class CustomError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CustomError'
  }
}
