export const INC_PAGE = 'STEPS/INC_PAGE'
export const DEC_PAGE = 'STEPS/DEC_PAGE'


const initialState  = {
    currentPage: 1,
    pagesName: [
        "Basic", "Contacts", "Social", "Finish"
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case INC_PAGE:
            let newIncCurrentPage = Math.min(state.pagesName.length, state.currentPage + 1)
            return {
                ...state,
                currentPage: newIncCurrentPage
            }
        case DEC_PAGE:
            let newDecCurrentPage = Math.max(1, state.currentPage - 1)
            return {
                ...state,
                currentPage: newDecCurrentPage
            }
        default:
            return state;
    }
}

export function incrementPage() {
    return {
        type: INC_PAGE
    }
}

export function decreasePage() {
    return {
        type: DEC_PAGE
    }
}
