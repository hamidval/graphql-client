import { Parent, Parents } from "../generated/types";
import { ParentList, Parent as _Parent } from "../types/parent";



export default class ParentTransforms 
{
     constructor(){}


     public parents(data: Parents): ParentList
     {
        return {
            parents: data.parents.map(x => this.parent(x))
        }
     }

     public parent(parent: Parent): _Parent {
        return {
            Id: parent.Id,
            FirstName: parent.FirstName,
            FullName: this.fullName(parent)
        }
     }

     public fullName(parent: Parent)
     {
        return parent.FirstName + " " + parent.LastName 
     }

}