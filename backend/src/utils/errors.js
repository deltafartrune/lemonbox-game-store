class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const errors = {
  UNAUTHORIZED: new ApiError(401, 'Unauthorized'),
  FORBIDDEN: new ApiError(403, 'Forbidden'),
  NOT_FOUND: new ApiError(404, 'Not found'),
  CONFLICT: new ApiError(409, 'Conflict'),
  UNPROCESSABLE_ENTITY: new ApiError(422, 'Unprocessable entity'),
  INTERNAL_SERVER_ERROR: new ApiError(500, 'Internal server error'),
};

module.exports = {
  ApiError,
  errors,
};
