# Route C64 Angular With Eng.Muhamed Hajajii

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

Command lines used so far:

```bash
ng new angular-project      #used to init the workspace that holds all the projects
ng g app app-name           # used to create an application
ng s                        # used to serve the app
ng g c component-name       # used to generate components
ng s -o                     # to serve and open the app on localhost "4200" by default
ng s --port 4220            # serve tha app on specific port
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### creating multiple components in a single line

```cmd
<!-- this will generate all components inside the () one by one each has its own folder -->

cd src/app
dir components
for %x in (component01, component02, component03) do ng g c %x
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
