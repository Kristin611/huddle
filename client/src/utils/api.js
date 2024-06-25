export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

  export const loginUser = async (userData) => {
    console.log("yooooooooooooooooooooooooo")
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        console.log(response.headers.get('content-type')); // Check Content-Type header
        console.log(await response.text());

        if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            throw new Error(message);
        }

        return response.json();
    } catch (error) {
        console.error("Failed to log in:", error);
        throw error; // Rethrow the error to handle it upstream
    }
};

  export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };