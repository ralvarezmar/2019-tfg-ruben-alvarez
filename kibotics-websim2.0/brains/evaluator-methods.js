import {config} from './config_evaluator.js'

export function runEvaluator(arrayRobots,config_file){
  import * from config_file;
  main_function(arrayRobots);
}
