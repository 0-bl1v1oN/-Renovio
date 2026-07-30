import type {CustomMaterialInstance,CustomMaterialResult} from './custom-materials';
export type OpeningType='window'|'door'; export type MaterialType='wallpaper'|'paint'|'laminate'|'baseboard'|'tile';
export interface RoomDimensions {length:number;width:number;height:number}
export interface Opening{id:string;type:OpeningType;name:string;width:number;height:number;quantity:number}
export interface Settings{wallpaper:{width:number;length:number;rapport:number;price:number;waste:number};paint:{surface:'walls'|'ceiling';consumption:number;coats:number;can:number;price:number;waste:number};laminate:{pack:number;price:number;laying:'straight'|'diagonal'|'custom';waste:number};baseboard:{length:number;price:number;waste:number};tile:{surface:'floor'|'walls';length:number;width:number;perPack:number;price:number;waste:number}}
export interface MaterialResult{type:MaterialType;surface:string;quantity:number;unit:string;waste:number;unitPrice:number;cost:number;details:string}
export interface RenovationProject{id:string;projectName:string;roomName:string;room:RoomDimensions;openings:Opening[];materials:MaterialType[];settings:Settings;results:MaterialResult[];customMaterials?:CustomMaterialInstance[];customResults?:CustomMaterialResult[];createdAt:string;updatedAt:string}
