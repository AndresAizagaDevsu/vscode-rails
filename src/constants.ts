import { dirname, join,sep, basename } from 'path';
export const REL_CONTROLLERS = join("app","controllers");
export const REL_MODELS =  join("app","models");
export const REL_VIEWS =  join("app","views");
export const REL_LAYOUTS = join("app","layouts");
export const REL_HELPERS = join("app","helpers");
export const REL_JAVASCRIPTS = join("app","assets","javascripts");
export const REL_STYLESHEETS = join("app","assets","stylesheets");
export const REL_SPEC = "spec"
export const REL_TEST = "test"
export const REL_CONTROLLERS_CONCERNS = join("app","controllers","concerns");
export const REL_MODELS_CONCERNS =  join("app","models","concerns");
export enum FileType {
    Controller,
    ControllerConcerns,
    Model,
    ModelConcerns,
    Layout,
    View,
    Helper,
    Javascript,
    StyleSheet,
    Rspec,
    Test,
    Unkown
}
export var FileTypeRelPath = new Map([
    [FileType.Controller,REL_CONTROLLERS],
    [FileType.ControllerConcerns,REL_CONTROLLERS_CONCERNS],
    [FileType.Model,REL_MODELS],
    [FileType.ModelConcerns,REL_MODELS_CONCERNS],
    [FileType.Layout,REL_LAYOUTS],
    [FileType.View,REL_VIEWS],
    [FileType.Helper,REL_HELPERS],
    [FileType.Javascript,REL_JAVASCRIPTS],
    [FileType.StyleSheet,REL_STYLESHEETS],
    [FileType.Rspec,REL_SPEC],
    [FileType.Test,REL_TEST],
]);