export async function handleJSONResponse(response: Response) {
    return await response.json();
}

function rejectPromiseWith(message) {
    return Promise.reject(message);
}

export function handleError(error) {
    if (error.response) {
        // Conflict Error
        if (error.response.status === 409) {
            return rejectPromiseWith(error.response.data.error.message);
        }
        // Entity validation Error
        if (error.response.status === 422) {
            return rejectPromiseWith(error.response.data);
        }
        // Server Error
        if (error.response.status === 500) {
            return rejectPromiseWith(error.response.data.error);
        }
    }
    // Fallback
    return rejectPromiseWith('Oops! Un error ha ocurrido.');
}
