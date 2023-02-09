const videosDataBase = [
    {
        id: 1,
        title: "MATRIX",
        author: "Waczowski Bros",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2011-05-15T00:00:00.000Z",
        publicationDate: "2011-05-15T08:00:00.000Z",
        availableResolutions: ["P144"],
    },
    {
        id: 2,
        title: "MATRIX2",
        author: "Waczowski Bros",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2012-05-15T00:00:00.000Z",
        publicationDate: "2012-05-15T08:00:00.000Z",
        availableResolutions: ["P144"],
    }
];
export const videosRepository = {
    findVideos(searchTerm: string | null)
}
