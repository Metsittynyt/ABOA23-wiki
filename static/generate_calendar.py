import json
import os

def generate_calendar_table(data):
    months = [
        'December', 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November' 
    ]

    tables = []
    for i, month in enumerate(months, 1):
        table = '<div class="col-xs-12 col-md-6 col-lg-4">\n'  # Create a new column for each month
        table += '<table class="calendar">\n'
        # Add table caption with the month name
        table += f'<caption>{month}</caption>\n'
        # Add table headers
        weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        table += '<tr>'
        for day in weekdays:
            table += f'<th>{day}</th>'
        table += '</tr>\n'

        # Loop through the data and generate table rows for the current month
        weeks_data = data.get(month.lower(), {})
        for week, days in weeks_data.items():
            table += '<tr>'
            colNum = 0
            for day in range(1, 8):
                colNum += 1
                day_data = days.get(str(day), [])
                if isinstance(day_data, dict) and day_data.get('id') == 'note':
                    table += generate_note_cell(day_data, colNum)
                else:
                    table += f'<td>{",".join(map(str, day_data))}</td>'
            table += '</tr>\n'
        table += '</table>'
        table += '</div>\n'  # Close the column div
        tables.append(table)


    # Wrap the tables in a container div with class "row"
    tables_html = '<div class="row">\n' + "\n".join(tables) + '</div>'
    return tables_html

def generate_note_cell(note_data, colNum):
    cell_html = f'<td id="note">'
    cell_html += '<div class="dropdown">'
    cell_html += f'<button class="dropdownbtn"><span>{note_data["day"]}</span></button>'

    # move dropdown content so that it hovers over table
    if colNum == 1 :
        cell_html += '<div class="dropdown-content" style="margin-left: -10px;">'
    elif colNum == 2:
        cell_html += '<div class="dropdown-content" style="margin-left: -60px;">'
    elif colNum == 3:
        cell_html += '<div class="dropdown-content" style="margin-left: -105px;">'
    elif colNum == 5:
        cell_html += '<div class="dropdown-content" style="margin-left: -205px;">'
    elif colNum == 6:
        cell_html += '<div class="dropdown-content" style="margin-left: -250px;">'
    elif colNum == 7:
        cell_html += '<div class="dropdown-content" style="margin-left: -295px;">'
    else:
        cell_html += '<div class="dropdown-content">'

    cell_html += f'<button class="closebtn">x</button>'  # Close button
    cell_html += f'<h3>{note_data["date"]}</h3>'
    cell_html += '<hr>'

    for subnav_item in note_data["subnav"]:
        cell_html += '<div class="subnav">'
        cell_html += f'<button class="subnavbtn">{subnav_item["title"]} <i class="fa fa-caret-down"></i></button>'
        cell_html += '<div class="subnav-content">'
        cell_html += f'<p>{subnav_item["description"]}</p>'
        # Check if subnav item has an image
        if "image" in subnav_item:
            cell_html += f'<img src="{subnav_item["image"]}" alt="{subnav_item["title"]}" class="subnav-img">'
        cell_html += '</div>'
        cell_html += '</div>'
        cell_html += '<hr>'

    cell_html += '</div>'
    cell_html += '</td>'
    return cell_html





def insert_calendar_into_notebook(data_file_path, notebook_file_path):
    with open(data_file_path) as json_file:
        data = json.load(json_file)

    # Get the path to the notebook.html file relative to the static directory
    notebook_path = os.path.join(os.path.pardir, 'wiki', 'pages', notebook_file_path)

    with open(notebook_path, 'r') as notebook_file:
        notebook_content = notebook_file.read()

    # Find the start and end indices of the block containing old calendars
    start_marker = '{% block calendar %}'
    end_marker = '{% endblock %}'
    start_index = notebook_content.find(start_marker)
    end_index = notebook_content.find(end_marker, start_index)

    # Generate the new calendars
    new_calendars = generate_calendar_table(data)

    # Replace the content between start_marker and end_marker with new_calendars
    updated_content = (
        notebook_content[:start_index] +
        start_marker + '\n' +
        new_calendars +
        '\n' + end_marker +
        notebook_content[end_index + len(end_marker):]
    )

    with open(notebook_path, 'w') as updated_notebook_file:
        updated_notebook_file.write(updated_content)

if __name__ == "__main__":
    data_file_path = os.path.join(os.path.pardir, 'data.json')
    notebook_file_path = 'notebook.html'
    insert_calendar_into_notebook(data_file_path, notebook_file_path)
