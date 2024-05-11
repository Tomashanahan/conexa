import { handleError } from '@/utils/apiHandler';

describe('handleError', () => {
    it('should handle 409 conflict error', async () => {
        const error = {
            response: {
                status: 409,
                data: { error: { message: 'Conflict occurred' } },
            },
        };
        await expect(handleError(error)).rejects.toEqual('Conflict occurred');
    });

    it('should handle 422 entity validation error', async () => {
        const error = {
            response: {
                status: 422,
                data: { validation: 'Error details' },
            },
        };
        await expect(handleError(error)).rejects.toEqual({ validation: 'Error details' });
    });

    it('should handle 500 server error', async () => {
        const error = {
            response: {
                status: 500,
                data: { error: 'Server error occurred' },
            },
        };
        await expect(handleError(error)).rejects.toEqual('Server error occurred');
    });

    it('should handle errors without response as general errors', async () => {
        const error = {};
        await expect(handleError(error)).rejects.toEqual('Oops! Un error ha ocurrido.');
    });
});
