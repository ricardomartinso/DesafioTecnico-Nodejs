type AppErrorTypes =
  | "InvalidCpfException"
  | "NotFoundCpfException"
  | "ExistsCpfException";

export interface AppError {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
  if (type === "InvalidCpfException") return 400;
  if (type === "NotFoundCpfException") return 404;
  if (type === "ExistsCpfException") return 409;
  return 400;
}

export function conflictCpfError(message?: string): AppError {
  return { type: "ExistsCpfException", message: message ?? "" };
}

export function notFoundCpfError(message?: string): AppError {
  return { type: "NotFoundCpfException", message: message ?? "" };
}

export function invalidCpfError(message?: string): AppError {
  return { type: "InvalidCpfException", message: message ?? "" };
}
