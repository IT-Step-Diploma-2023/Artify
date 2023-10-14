const useStorage = () => {

    function setTargetUserId(id: number): void {
        localStorage.setItem("targetUserId", id.toString())
    }

    function getTargetUserId(): number {
        const idString = localStorage.getItem("targetUserId");
        if (idString === null) return -1;
        return parseInt(idString);
    }

    return { setTargetUserId, getTargetUserId }
}

export default useStorage;