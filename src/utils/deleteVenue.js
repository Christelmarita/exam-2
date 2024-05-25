export default async function deleteVenue(id, token, apiKey) {
  const url = `https://v2.api.noroff.dev/holidaze/venues/${id}`;

  if (!token) {
    console.error("User is not authenticated");
    throw new Error("User is not authenticated");
  }

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Error response:", errorData);
      throw new Error(
        `Failed to delete venue: ${errorData.message || "Unknown error"}`
      );
    }

    return response;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error;
  }
}
