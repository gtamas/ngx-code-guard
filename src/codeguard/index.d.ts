import { Rule } from '@angular-devkit/schematics';
import { Schema as NGXCodeGuardSchema } from './schema';
interface ExtendedSchema extends NGXCodeGuardSchema {
    [prop: string]: any;
}
export declare function command({ command, args }: {
    command: string;
    args: string[];
}): Rule;
export declare function codeGuard(options: ExtendedSchema): Rule;
export {};
