import { atom } from "jotai";
import { StorageType } from "./utils/types";
import { atomWithStorage } from 'jotai/utils'


export const storageAtom = atomWithStorage<StorageType>("projectlist-store", {});