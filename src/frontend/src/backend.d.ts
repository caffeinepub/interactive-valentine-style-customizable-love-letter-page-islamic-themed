import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Child {
    id: bigint;
    name: string;
}
export interface Letter {
    id: bigint;
    content: string;
    childId: bigint;
    parentName: string;
}
export interface Photo {
    id: bigint;
    title: string;
    description: string;
    childId: bigint;
    s3Link: string;
}
export interface backendInterface {
    addChild(name: string): Promise<bigint>;
    addLetter(content: string, childId: bigint, parentName: string): Promise<bigint>;
    addPhoto(title: string, description: string, childId: bigint, s3Link: string): Promise<bigint>;
    getAllPhotos(): Promise<Array<Photo>>;
    getAllPhotosByTitle(): Promise<Array<Photo>>;
    getChild(id: bigint): Promise<Child>;
    getLetter(id: bigint): Promise<Letter>;
    getPhoto(id: bigint): Promise<Photo>;
}
