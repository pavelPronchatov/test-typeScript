import {AlbumType, PhotoType} from "../../types/user";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {usersApi} from "../../api";


const SET_ALBUMS = "SET_ALBUMS";
type SetAlbumsType = {
  type: typeof SET_ALBUMS
  data: Array<AlbumType>
}

const SET_PHOTOS = "SET_PHOTOS";
type SetPhotosType = {
  type: typeof SET_PHOTOS
  data: Array<PhotoType>
  id: number
}

const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
type SetSelectedItem = {
  type: typeof SET_SELECTED_ITEM
  data: AlbumType
}



const initialState = {
  albums: [] as Array<AlbumType>,
  selectedItem: {} as AlbumType,
};


export type InitialStateType = typeof initialState;

export type ActionsTypes = SetAlbumsType | SetPhotosType | SetSelectedItem;

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {

    case SET_ALBUMS:
      return {
        ...state,
        albums: action.data
      }

    case SET_PHOTOS:
      return {
        ...state,
        albums: state.albums.map(el => {
          if (el.id === action.id) {
            return {
              ...el,
              photos: action.data,
            }
          } else {
            return el;
          }
        })
      }

    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.data
      }

    default:
      return state
  }
}


const setAlbumsAC = (data: Array<AlbumType>): SetAlbumsType => ({type: SET_ALBUMS, data});
const setPhotosAc = (data: Array<PhotoType>, id: number): SetPhotosType => ({type: SET_PHOTOS, data, id});
export const setSelectedItemAC = (data: AlbumType): SetSelectedItem => ({type: SET_SELECTED_ITEM, data});


export const setAlbums = (userId: string): ThunkAction<void, AppStateType, unknown, ActionsTypes> => (dispatch, getState) => {
  usersApi.getAlbums(userId)
    .then(res => dispatch(setAlbumsAC(res)))
    .then(() => {
      getState().app.albums.forEach(el => {
        console.log(el.id);
        usersApi.getPhotos(el.id)
          .then(res => dispatch(setPhotosAc(res, el.id)));
      })
    })
}


