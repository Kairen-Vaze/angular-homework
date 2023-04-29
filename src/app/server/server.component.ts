import { Component } from "@angular/core";

// export class để dùng ngoài file này, cụ thể là ở app component
@Component({
    selector: 'app-server',
    // to reference external file, using templateUrl
    templateUrl: './server.component.html',
})
export class ServerComponent {

}